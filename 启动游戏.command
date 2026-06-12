#!/bin/zsh
cd "$(dirname "$0")"

PORT=4173
URL="http://127.0.0.1:${PORT}/index.html"

if ! /usr/bin/lsof -iTCP:${PORT} -sTCP:LISTEN >/dev/null 2>&1; then
  python3 -m http.server ${PORT} --bind 127.0.0.1 &
  SERVER_PID=$!
  sleep 1
fi

open "${URL}"

echo "英澳美模拟器已经打开：${URL}"
echo "这个窗口不要关，关掉后网页可能就打不开了。"
echo "按 Control + C 可以停止本地服务器。"

wait
