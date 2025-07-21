const generateDescription = async (productName) => {
  const apiKey = import.meta.env.VITE_COHERE_API_KEY;

  try {
    const response = await fetch('https://api.cohere.ai/v1/generate', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Cohere-Version': '2022-12-06',
      },
      body: JSON.stringify({
        model: 'command',
        prompt: `Write a short, attractive, professional e-commerce product description for a product named "${productName}". Make it appealing and under 80 words.`,
        max_tokens: 100,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    return data.generations?.[0]?.text.trim() || 'No description generated.';
  } catch (error) {
    console.error('Cohere AI Error:', error);
    return 'AI could not generate description. Please try again.';
  }
};

export default generateDescription;
