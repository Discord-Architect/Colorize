export default `
CLIENT_PREFIX="$client_prefix"
SECRET_TOKEN="$client_token"

# Please use double quote inside array to defined your intents
PARTIALS=$client_partials
COMMANDS_AUTO_REMOVE=true
COMMANDS_REMOVE_TIMEOUT=1000
`