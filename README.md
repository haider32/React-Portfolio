if error{opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'}
 then solution :
    Windows command prompt-

set NODE_OPTIONS=--openssl-legacy-provider
most working:
Windows PowerShell-

$env:NODE_OPTIONS = "--openssl-legacy-provider"
 

 Linux and macOS (Windows Git Bash)-

export NODE_OPTIONS=--openssl-legacy-provider