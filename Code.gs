function createVendorSecurityQuestionnaire() {
  // Create a new form
  const form = FormApp.create('Vendor Security Assessment Questionnaire');
  form.setDescription('Please complete this security assessment questionnaire. Your responses will help us evaluate your security controls and practices.');
  
  // Add vendor information section
  form.addSectionHeaderItem()
      .setTitle('Vendor Information');
  
  form.addTextItem()
      .setTitle('Company Name')
      .setRequired(true);
      
  form.addTextItem()
      .setTitle('Contact Name')
      .setRequired(true);
      
  form.addTextItem()
      .setTitle('Contact Email')
      .setRequired(true);

  // Security Questions - Yes/No Format
  form.addSectionHeaderItem()
      .setTitle('Security Controls Assessment');

  const yesNoQuestions = [
    'Do you have a documented information security policy?',
    'Do you have an incident response plan?',
    'Do you perform regular security awareness training for employees?',
    'Do you have encryption implemented for data at rest?',
    'Do you have encryption implemented for data in transit?',
    'Do you perform regular security assessments or audits?',
    'Do you have a business continuity plan?',
    'Do you have a disaster recovery plan?',
    'Are you compliant with any security frameworks (ISO 27001, SOC 2, etc.)?',
    'Do you have a formal change management process?',
    'Do you perform regular vulnerability scanning?',
    'Do you have multi-factor authentication implemented?',
    'Do you have a formal access control policy?',
    'Do you maintain security logs and monitoring?',
    'Do you perform regular data backups?'
  ];

  yesNoQuestions.forEach(question => {
    const item = form.addMultipleChoiceItem();
    item.setTitle(question)
        .setChoices([
          item.createChoice('Yes'),
          item.createChoice('No')
        ])
        .setRequired(true);
  });

  // Free-form Questions
  form.addSectionHeaderItem()
      .setTitle('Detailed Security Information');

  const freeFormQuestions = [
    'Please describe your data retention and disposal policies.',
    'What security certifications does your organization currently hold?',
    'Describe your incident response process.',
    'What controls do you have in place to protect customer data?',
    'Describe your approach to security patching and updates.',
    'List your key security tools and technologies.',
    'Describe your third-party risk management process.',
    'What is your process for conducting security testing?',
    'Describe your employee offboarding process.',
    'How do you manage and monitor third-party access to systems?'
  ];

  freeFormQuestions.forEach(question => {
    form.addParagraphTextItem()
        .setTitle(question)
        .setRequired(true);
  });

  // Get the form URL
  const formUrl = form.getPublishedUrl();
  Logger.log('Form URL: ' + formUrl);
  
  return formUrl;
} 
