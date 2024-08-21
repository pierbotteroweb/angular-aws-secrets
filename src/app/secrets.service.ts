// aws-secrets.service.ts

import { Injectable } from '@angular/core';
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";


@Injectable({
  providedIn: 'root'
})
export class SecretsService {
  private client: SecretsManagerClient;

  constructor() {
    this.client = new SecretsManagerClient({
      region: "sa-east-1", 
      credentials: {
        accessKeyId: 'AKIA2UC3DEF7B6QYLKGB',
        secretAccessKey: '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'
      }
    });
  }

  async getSecret(secretName: string): Promise<string> {

    let response;
    
    try {
      response = await this.client.send(
        new GetSecretValueCommand({
          SecretId: secretName,
          VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
        })
      );
    } catch (error) {
      // For a list of exceptions thrown, see
      // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
      throw error;
    }
    
    const secret = response.SecretString;
    
    console.log(secret);

    return secret
  }
}
