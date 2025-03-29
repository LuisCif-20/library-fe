const { writeFileSync, mkdirSync } = require( 'fs' );

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const targetPath = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

const API_URL = process.env.API_URL;
const AWS_URL = process.env.AWS_URL;

if ( !API_URL || !AWS_URL ) {
  throw new Error('API_URL or AWS_URL is not set.');
}

const envFileContent = `export const environment = {
  API_URL: "${API_URL}",
  AWS_URL: "${AWS_URL}"
};`;

mkdirSync( './src/environments', { recursive: true } );

writeFileSync( targetPath, envFileContent );
writeFileSync( targetPathDev, envFileContent );
