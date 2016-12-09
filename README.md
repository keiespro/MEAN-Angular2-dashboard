Prerequisites
•	You should have some familiarity with the Linux terminal since you’ll need to use it to install and test Node and NPM. You’ll also need the terminal to use Node.js and NPM.
•	Dependencies. You need to install a number of dependancies before you can install Node.js and NPM. 
1.	Ruby and GCC. You’ll need Ruby 1.8.6 or newer and GCC 4.2 or newer. 
•	For Ubuntu or Debian-based Linux distributions, run the following command in your terminal: sudo apt-get install build-essential curl git m4 ruby texinfo libbz2-dev libcurl4-openssl-dev libexpat-dev libncurses-dev zlib1g-dev Then select Y to continue and wait for the packages to be installed.
•	For Fedora based Linux distributions run the following command in your terminal application: sudo yum groupinstall 'Development Tools' && sudo yum install curl git m4 ruby texinfo bzip2-devel curl-devel expat-devel ncurses-devel zlib-devel Then select Y to continue and wait for the packages to be installed.
2.	Homebrew. Homebrew is a package manager originally for the Mac, but it’s been ported to Linux as Linuxbrew, making installing most open-source software (like Node) as simple as writing: brew install node You can learn more about Homebrew at the Homebrew website and Linuxbrew at the Linuxbrew website. To install Homebrew for Linux, open your terminal application and paste in the command: ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/linuxbrew/go/install)" Follow the instructions in the terminal to complete the installation process.
Once Linuxbrew is installed, you’ll need add the following 3 lines to your .bashrc or .zshrc file:
  export PATH="$HOME/.linuxbrew/bin:$PATH"   export MANPATH="$HOME/.linuxbrew/share/man:$MANPATH"   export INFOPATH="$HOME/.linuxbrew/share/info:$INFOPATH" 


1.Node Installation
Open up your terminal and type brew install node.
2.Install typescript
npm install -g typescript
3.Install mongodb
https://docs.mongodb.com/v3.0/administration/install-on-linux/#recommended

4.Put all the files in a folder and name it “admin page”
$ cd “admin page”
$ npm install
$ npm start



That’all.
On xp, we can download node.js installation files and set up.
Download msi file from the mongodb official site and just install.
