const resumeUrl = "https://raw.githubusercontent.com/zarghambd/MyPortfolio/main/public/Zargham_Haider_Business_Development_Manager.pdf";

export async function GET() {
    const response = await fetch(resumeUrl, { next: { revalidate: 300 } });

    if (!response.ok || !response.body) {
        return new Response("Resume unavailable", { status: 502 });
    }

    return new Response(response.body, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": 'attachment; filename="Zargham_Haider_Business_Development_Manager.pdf"',
            "Cache-Control": "public, max-age=300",
        },
    });
}