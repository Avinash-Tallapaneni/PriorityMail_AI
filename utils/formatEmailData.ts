const formatEmailData = (emailData: any) => {
  const headers = emailData.payload.headers;

  const bodyPart = emailData.payload.parts.find(
    (part: any) => part.mimeType === "text/plain"
  );

  const fromHeader = headers.find((header: any) => header.name === "From");
  const subjectHeader = headers.find(
    (header: any) => header.name === "Subject"
  );
  const dateHeader = headers.find((header: any) => header.name === "Date");

  const bodyContent = Buffer.from(bodyPart.body.data, "base64").toString();

  const formattedEmail = {
    id: emailData.id as string,
    name: fromHeader.value.split("<")[0].trim() as string,
    email: fromHeader.value.match(/<(.*)>/)[1] as string,
    subject: subjectHeader.value as string,
    text: bodyContent,
    date: new Date(dateHeader.value).toISOString(),
  };

  return formattedEmail;
};

export default formatEmailData;
