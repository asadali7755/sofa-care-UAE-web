import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY!);
  try {
    const { type, phone, work, name, time } = await req.json();

    await resend.emails.send({
      from: 'SofaShampooingDubai <onboarding@resend.dev>',
      to: 'marbleprodxb@gmail.com',
      subject: `[SofaShampooingDubai] New ${type}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#f3f7f4;border-radius:12px;border-top:4px solid #0D9488;">
          <div style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;color:#0D9488;font-weight:700;">sofashampooingdubai.com</div>
          <h2 style="margin:0 0 24px;font-size:22px;color:#1a2e1a;">New ${type}</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #d4e5d4;color:#666;width:110px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #d4e5d4;font-weight:600;color:#1a2e1a;">${name || '—'}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #d4e5d4;color:#666;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #d4e5d4;font-weight:600;color:#1a2e1a;">${phone}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #d4e5d4;color:#666;">Service</td><td style="padding:10px 0;border-bottom:1px solid #d4e5d4;color:#1a2e1a;">${work || '—'}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #d4e5d4;color:#666;">Type</td><td style="padding:10px 0;border-bottom:1px solid #d4e5d4;color:#1a2e1a;">${type}</td></tr>
            <tr><td style="padding:10px 0;color:#666;">Time (Dubai)</td><td style="padding:10px 0;color:#1a2e1a;">${time}</td></tr>
          </table>
          <div style="margin:24px 0 0;padding:12px 16px;background:#e6f7f5;border-radius:8px;font-size:12px;color:#0D9488;">
            <strong>Website:</strong> sofashampooingdubai.com &nbsp;|&nbsp; <strong>Business:</strong> Al Haya Sofa Care UAE
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
