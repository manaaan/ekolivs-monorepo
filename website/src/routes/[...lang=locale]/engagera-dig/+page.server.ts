import { render } from 'svelte-email';
import NewMemberEkolivsEN from '$lib/emails/new-member-to-ekolivs.en.svelte';
import NewMemberEkolivsSV from '$lib/emails/new-member-to-ekolivs.sv.svelte';
import postmark from 'postmark';
import { t, locale } from '$lib/translations';
import { POSTMARK_API_KEY } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';

const client = new postmark.ServerClient(POSTMARK_API_KEY as string);

async function sendMailToEkolivs(data: FormData) {
  if (!data.get('email')) {
    throw new Error('Must provide email');
  } else if (!data.get('name')) {
    throw new Error('Must provide name');
  } else if (!data.get('wantMembership')) {
    throw new Error('Must say if you want to become a member');
  } else if (!data.get('englishPreference')) {
    throw new Error('Must state if you prefer English');
  }

  const member = data.get('wantMembership')?.toString() === 'yes';
  const active = data.get('activeMember')?.toString() === 'yes';
  const prefEnglish = data.get('englishPreference')?.toString() === 'yes';

  // Email to info@ekolivs.se about new member

  const emailHtml = render({
    template: locale.get() == 'en' ? NewMemberEkolivsEN : NewMemberEkolivsSV,
    props: {
      name: data.get('name')?.toString(),
      email: data.get('email')?.toString(),
      phone: data.get('phone')?.toString(),
      notes: data.get('notes')?.toString(),
      active,
      member,
      prefEnglish
    }
  });

  const options = {
    From: 'info@ekolivs.se',
    To: 'info@ekolivs.se',
    Subject: t.get('engage.member.email.member-to-ekolivs.subject'),
    HtmlBody: emailHtml
  };

  const res = await client.sendEmail(options);
  if (res.ErrorCode != 0) {
    console.error('failed to send mail to info@ekolivs.se');
    throw new Error(
      'Failed to send message. Please try to contact Ekolivs directly per mail on info@ekolivs.se'
    );
  }
}

export const actions = {
  default: async (event) => {
    const data = await event.request.formData();

    try {
      await sendMailToEkolivs(data);
    } catch (e: unknown) {
      return fail(422, {
        email: data.get('email'),
        name: data.get('name'),
        phone: data.get('phone'),
        notes: data.get('notes'),
        wantMembership: data.get('wantMembership'),
        activeMember: data.get('activeMember'),
        englishPreference: data.get('englishPreference'),
        error: (e as Error).message
      });
    }
    throw redirect(302, `/${locale.get()}/registrerat`);
  }
};
