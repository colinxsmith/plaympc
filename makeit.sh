 #!/usr/bin/bash
 rm -rf build
 npm run build
 zip  -r plaympc build
 scp plaympc.zip  pi@trixie64.local:~/mpcserver
 
