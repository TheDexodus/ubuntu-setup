Login in lastpass and copy your "UBUNTU\SSH\PUBLIC_KEY" IN ~/.ssh/id_rsa.pub, and copy your "UBUNTU\SSH\PRIVATE_KEY_PART_1", "UBUNTU\SSH\PRIVATE_KEY_PART_2" IN ~/.ssh/id_rsa

Next, run `sed -i 's/|/\n/g' ~/.ssh/id_rsa`


1. `sudo apt update`
2. `sudo apt install git`
3. `git clone git@github.com:TheDexodus/ubuntu-setup.git ~/ubuntu-setup && cd ~/ubuntu-setup`

export USER_EMAIL=the.dexodus@gmail.com
export USER_NAME="Daniil Yaroshuk"
git config --global user.email "$USER_EMAIL"
git config --global user.name "$USER_NAME"



Install programms

`mkdir -p ~/temp && cd ~/temp`

Google Chrome
1. `wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && sudo dpkg -i google-chrome-stable_current_amd64.deb`
Spotify
1. `sudo snap install spotify`
Jetbrains Toolbox
1. `wget https://download.jetbrains.com/toolbox/jetbrains-toolbox-1.22.10970.tar.gz && tar -xf jetbrains-toolbox-1.22.10970.tar.gz && ./jetbrains-toolbox-1.22.10970/jetbrains-toolbox`
Flameshot
1. `sudo apt install flameshot`
2. `gsettings set org.gnome.settings-daemon.plugins.media-keys.custom-keybinding:/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom0/ name "Flameshot GUI"`
3. `gsettings set org.gnome.settings-daemon.plugins.media-keys.custom-keybinding:/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom0/ command "flameshot gui"`
4. `gsettings set org.gnome.settings-daemon.plugins.media-keys.custom-keybinding:/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom0/ binding "<Shift><Super>s"`
5. `gsettings set org.gnome.settings-daemon.plugins.media-keys custom-keybindings "['/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings/custom0/']"`
6. `mkdir -p ~/.config/autostart/ && cp ~/ubuntu-setup/configs/flameshot/Flameshot.desktop ~/.config/autostart/Flameshot.desktop`
7. `mkdir -p ~/.config/Dharkael/ && cp ~/ubuntu-setup/configs/flameshot/flameshot.ini ~/.config/Dharkael/flameshot.ini`
8. `flameshot config -a true` // TODO : remove this line, because options will been in config "configs/flameshot/flameshot.ini"
Microsoft Teams 
1. `wget https://packages.microsoft.com/repos/ms-teams/pool/main/t/teams/teams_1.4.00.26453_amd64.deb && sudo dpkg -i teams_1.4.00.26453_amd64.deb`
Telegram
1. `sudo apt install telegram-desktop`

Install utils

Other:
1. `sudo apt-get install ca-certificates curl gnupg lsb-release python3-pip pavucontrol`

Docker:
1. `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg`
2. `echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`
3. `sudo apt-get update && sudo apt-get install docker-ce docker-ce-cli containerd.io`
4. `sudo groupadd docker && sudo usermod -aG docker $USER && newgrp docker`

Docker Compose:
1. `sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`
2. `sudo chmod +x /usr/local/bin/docker-compose`

Rog core
1. `sudo apt install rustc cargo make libusb-1.0-0-dev libdbus-1-dev llvm libclang-dev`
2. `git clone git@github.com:TheDexodus/rog-core.git ~/temp/rog-core && cd ~/temp/rog-core`
3. `make && sudo make install`

Clockify
1. `sudo apt install gconf2 gconf-service libappindicator1 libgconf-2-4 gconf-service-backend libdbusmenu-gtk4 gconf2-common`
2. `wget https://clockify.me/downloads/Clockify_Setup.deb && sudo dpkg -i Clockify_Setup.deb`

Dconf-editor
1. `sudo apt install dconf-editor`

Brew 
1. `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
2. `echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> /home/dexodus/.profile`
3. `eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"`


WLED `wget https://github.com/WoodyLetsCode/WLED-GUI/releases/download/v0.7.1/WLED-0.7.1-Linux.deb && sudo dpkg -i WLED-0.7.1-Linux.deb`

LedFx `curl -sSL https://install.ledfx.app | bash`

Theme settings
1. `sudo apt-get install gnome-tweak-tool`
2. `sudo add-apt-repository ppa:daniruiz/flat-remix && sudo apt update && sudo apt install flat-remix-gnome flat-remix-gtk flat-remix`
3. `gsettings set org.gnome.desktop.interface gtk-theme "Flat-Remix-GTK-Green-Dark"`
4. `gsettings set org.gnome.desktop.interface icon-theme "Flat-Remix-Green-Dark"`
5. `wget https://w.wallhaven.cc/full/1j/wallhaven-1j797g.jpg && sudo mv ./wallhaven-1j797g.jpg /usr/share/backgrounds/mountains.jpg && gsettings set org.gnome.desktop.background picture-uri "file:///usr/share/backgrounds/mountains.jpg"`
6. `gsettings set org.gnome.gedit.preferences.editor highlight-current-line false`
7. `gsettings set org.gnome.desktop.input-sources xkb-options "['grp:alt_shift_toggle']" && gsettings set org.gnome.desktop.wm.keybindings switch-input-source "['']" && gsettings set org.gnome.desktop.wm.keybindings switch-input-source-backward  "['']"`
8. `gsettings set org.gnome.settings-daemon.plugins.media-keys terminal "['<Super>t']"`
9. `gsettings set org.gnome.shell.extensions.dash-to-dock dash-max-icon-size 25`
11. `gsettings set org.gnome.shell.extensions.dash-to-dock dock-position BOTTOM`
10. `gsettings set org.gnome.shell.extensions.dash-to-dock dock-fixed false`
11. `gsettings set org.gnome.shell.extensions.dash-to-dock extend-height false`
12. `gsettings set org.gnome.shell favorite-apps "['org.gnome.Nautilus.desktop', 'org.gnome.Terminal.desktop', 'google-chrome.desktop', 'spotify_spotify.desktop', 'jetbrains-phpstorm.desktop']"`
13. `gsettings set org.gnome.gedit.preferences.editor scheme "Flat-Remix"`
14. `gsettings set  org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ paste "'<Ctrl>v'"`
14. `gsettings set  org.gnome.Terminal.Legacy.Keybindings:/org/gnome/terminal/legacy/keybindings/ copy "'<Ctrl>c'"`












