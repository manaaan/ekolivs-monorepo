<script lang="ts">
  import { Container, Hr, Html, Preview, Section, Text } from 'svelte-email';

  export let email = '';
  export let name = '';
  export let phone = '';
  export let notes = '';
  export let member = false;
  export let active = false;
  export let prefEnglish = false;
  const previewText = `${name} has shown interest in becoming a new ${
    active ? 'active ' : ''
  }member`;

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

<Html lang="en">
  <Preview preview={previewText} />
  <Section style={main}>
    <Container style={container}>
      <Text style={paragraph}>Hurra, Ekolivs!</Text>
      <Text style={paragraph}>
        {name} has shown interest in becoming a member at Ekolivs!
      </Text>
      <Hr style={hr} />
      <Text style={paragraph}>Here follow the details about the registration</Text>
      <Text style={paragraph}>Name: {name}</Text>
      <Text style={paragraph}>Email: {email}</Text>
      {#if phone}
        <Text style={paragraph}>Phone: {phone}</Text>
      {/if}
      <Text style={paragraph}>Wants to become member: {member ? 'yes' : 'no'}</Text>
      <Text style={paragraph}>Wants to be an active member: {active ? 'yes' : 'no'}</Text>
      <Text style={paragraph}>Prefers to be contacted in English: {prefEnglish ? 'yes' : 'no'}</Text
      >
      {#if notes}
        <Text style={paragraph}>Further notes:</Text>
        <Text style={paragraph}>{notes}</Text>
      {/if}
      <Hr style={hr} />
      <Text style={paragraph}>
        Please get in contact with the person and introduce them to Ekolivs, our ideas, values and
        working ways.
      </Text>
      <Text style={paragraph}>Further tasks to complete with new member:</Text>
      <Text style={paragraph}>- Tell them about the initial stake and yearly member fee</Text>
      <Text style={paragraph}>- Register in member list (fibery)</Text>
      <Text style={paragraph}>- Add in group mail accounts</Text>
      {#if active}
        <Text style={paragraph}>- Add to Slack</Text>
        <Text style={paragraph}>- Book in first intro shift</Text>
      {/if}
    </Container>
  </Section>
</Html>
