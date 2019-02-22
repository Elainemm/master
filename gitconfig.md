1. 注册github账号
2. 配置ssh keys
   > $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

   > Generating public/private rsa key pair.
   
   > Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa):[Press enter]
   (此处可以更改ssh keys存放的路径，不更改就是默认的路径)

   > Enter passphrase (empty for no passphrase): [Type a passphrase]

   > Enter same passphrase again: [Type passphrase again]
   (设置一个passphrase)
3. 到本机ssh keys所在的路径，将id_rsa.pub中的内容拷贝配置到github上的SSH keys（点击New SSH key 添加）
4. 在github上创建一个项目（repositories），如master

   在本地 git clone https://github.com/Elainemm/master.git

   clone 项目到本地，更改readme中内容并操作git命令最终push到github上

5. git push 免输入账号密码的解决：

   git config --global credential.helper store

   打开~/.gitconfig文件，会发现多了一项:

   [credential]
   
　　helper = store

   此时,再次push  输入用户名和密码,以后再次push即可免去输入用户名和密码
   （用户名密码是github注册时的账号密码（并非前面创建sshkey是的passphrase））
   