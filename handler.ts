import { APIGatewayEvent, Context, Handler, Callback } from 'aws-lambda';
import 'source-map-support/register';

export const hello: Handler = (event : APIGatewayEvent, context : Context, cb : Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Serverless typescript',
      input: event,
    })
  }

  cb(null, response)
}
