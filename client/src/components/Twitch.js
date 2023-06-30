import React from 'react';
import { TwitchEmbed } from 'twitch-embed';
import '../css/master.css'

const TwitchPlayer = () => {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="d-flex justify-content-center col-9">
                    <div id="twitch-player">
                        hello!
                        <TwitchEmbed
                            channel="your_channel_name"
                            id="your_twitch_player_id"
                            theme="dark"
                            muted
                        />
                    </div>
                    <iframe
                        id="chat_embed"
                        src="https://www.twitch.tv/embed/merskies/chat?parent=www.example.com"
                        height="500"
                        width="350">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default TwitchPlayer;