import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

interface StepEvidence {
  index: number;
  status: string;
  imagePath: string;
}

interface PdfMetadata {
  scenarioName: string;
  executionDate: string;
  browser: string;
  environment: string;
}

export function generatePdfReport(
  metadata: PdfMetadata,
  steps: StepEvidence[]
) {
  const pdfDir = path.join('reports', 'pdf');
  if (!fs.existsSync(pdfDir)) fs.mkdirSync(pdfDir, { recursive: true });

  const pdfPath = path.join(pdfDir, `${metadata.scenarioName}.pdf`);
  const doc = new PDFDocument({ autoFirstPage: true });

  doc.pipe(fs.createWriteStream(pdfPath));

  //HEADER
  doc.fontSize(18).text(`Scenario: ${metadata.scenarioName.replace(/_/g, ' ')}`);
  doc.moveDown(0.5);

  doc.fontSize(12).text(`Date: ${metadata.executionDate}`);
  doc.text(`Browser: ${metadata.browser}`);
  doc.text(`Environment: ${metadata.environment}`);

  doc.moveDown(1);

  // STEPS
  steps.forEach(step => {
    doc.fontSize(12).text(`Step ${step.index} - ${step.status}`);
    doc.moveDown(0.5);

    if (fs.existsSync(step.imagePath)) {
      doc.image(step.imagePath, { fit: [500, 300] });
    }

    doc.addPage();
  });

  doc.end();
}
