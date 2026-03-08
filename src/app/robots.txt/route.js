export const GET = async () => {
    const robotsTxt = `
        User-agent: *
        Allow: /
        
        Sitemap: https://www.pearlepp.co.uk/sitemap.xml
    `.trim();

    return new Response(robotsTxt, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
};
