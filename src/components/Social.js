import React from "react";
import SocialItem from "./SocialItem";


function Social() {
    return (
        <div>
            <ul className="list-group">

                <SocialItem
                    data={{
                        name: "Facebook",
                        id: "facebook",
                        img: "https://picsum.photos/200/70"
                    }}
                />

                <SocialItem
                    data={{
                        name: "Youtube",
                        id: "youtube",
                        img: "https://picsum.photos/200/71"
                    }}
                />

                <SocialItem
                    data={{
                        name: "Instagram",
                        id: "instagram",
                        img: "https://picsum.photos/200/81"
                    }}
                />

                <SocialItem
                    data={{
                        name: "Linked-in",
                        id: "linkedIn",
                        img: "https://picsum.photos/200/72"
                    }}
                />

            </ul>
        </div>

    );
}

export default Social;