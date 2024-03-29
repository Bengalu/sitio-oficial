import Email from '@/components/Email'
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_eCxVHk6W_KQfZ1BbtdJectP2RXDuCWnXn");

export async function POST(request, response) {
    const res = await request.json();
    try {
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: ["bengalusoftware@gmail.com"],
            subject:"Pagina Official",
            react: <Email email={res.email} subject={res.subject} message={res.messageText} />
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}