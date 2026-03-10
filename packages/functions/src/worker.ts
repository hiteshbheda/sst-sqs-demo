export async function handler(event: any) {

  for (const record of event.Records) {

    const message = JSON.parse(record.body);

    console.log("Received job:", message);

    if (message.type === "generate_report") {

      console.log("Generating report for user:", message.userId);

      // simulate heavy work
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log("Report generation completed");

    }
  }
}