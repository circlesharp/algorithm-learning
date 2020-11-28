#! /usr/bin/bash

echo "正在运行清理程序，./cLangAgain路径下的 .exe 文件..."
find ./ -name '*.exe' | xargs rm  
echo "done."

exit 0
