import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const client = new SQSClient({});

export async function handler() {

  const queueUrl = process.env.JOB_QUEUE_URL!;

  const message = {
    type: "generate_report",
    userId: "123",
    createdAt: Date.now()
  };

  await client.send(
    new SendMessageCommand({
      QueueUrl: queueUrl,
      MessageBody: JSON.stringify(message)
    })
  );

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Job added to queue"
    })
  };
}