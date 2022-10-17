import React from "react";
import { ChannelContext, UserContext } from "./componentA";

function ComponentC() {

    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (<div>
                            <ChannelContext.Consumer>
                                {channel => {
                                    return channel
                                }}
                            </ChannelContext.Consumer> <br/>
                            {user}
                        </div>)
                    }
                }
            </UserContext.Consumer>
            ComponentC
        </div>
    );
}
export default ComponentC;
