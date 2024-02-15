<script lang="ts">
  import { Container, Hr, Html, Preview, Section, Text } from 'svelte-email';

  export let email = '';
  export let name = '';
  export let phone = '';
  export let notes = '';
  export let member = false;
  export let active = false;
  export let prefEnglish = false;
  const previewText = `${name} har visat intresse att bli en ny ${active ? 'aktiv ' : ''}medlem`;

  const fontFamily =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';
  const main = {
    backgroundColor: '#ffffff'
  };
  const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    width: '580px'
  };
  const hr = {
    borderColor: '#cccccc',
    margin: '20px 0'
  };
  const paragraph = {
    fontFamily,
    fontSize: '18px',
    lineHeight: '1.4',
    color: '#484848'
  };
</script>

<Html lang="sv">
  <Preview preview={previewText} />
  <Section style={main}>
    <Container style={container}>
      <Text style={paragraph}>Hurra, Ekolivs!</Text>
      <Text style={paragraph}>
        {name} har visat intresse att bli medlem i Ekolivs!
      </Text>
      <Hr style={hr} />
      <Text style={paragraph}>Här kommer detaljer för deras registrering</Text>
      <Text style={paragraph}>Namn: {name}</Text>
      <Text style={paragraph}>Email: {email}</Text>
      {#if phone}
        <Text style={paragraph}>Tel: {phone}</Text>
      {/if}
      <Text style={paragraph}>Vill bli medlem: {member ? 'ja' : 'nej'}</Text>
      <Text style={paragraph}>Vill bli aktiv medlem: {active ? 'ja' : 'nej'}</Text>
      <Text style={paragraph}>Föredrar engelska: {prefEnglish ? 'ja' : 'nej'}</Text>
      {#if notes}
        <Text style={paragraph}>Notiser:</Text>
        <Text style={paragraph}>{notes}</Text>
      {/if}
      <Hr style={hr} />
      <Text style={paragraph}>
        Komma ihåg att kontakta {name} så snart som möjligt för att förestella Ekolivs, våra idéer, värderingar
        och hur vi jobbar.
      </Text>
      <Text style={paragraph}>Andra uppgifter som behövs göre med nya medlem:</Text>
      <Text style={paragraph}>- Berätta om medlemsinsats och -avgift</Text>
      <Text style={paragraph}>- Registrera i medlemslista (fibery)</Text>
      <Text style={paragraph}>- Lägga till på grupp mail</Text>
      {#if active}
        <Text style={paragraph}>- Lägga till på Slack</Text>
        <Text style={paragraph}>- Boka första intropass</Text>
      {/if}
    </Container>
  </Section>
</Html>
