import React from 'react';
import { Channel } from './Channel';

export class ChannelList extends React.Component {

    handleClick = id => {
        this.props.onSelectChannel(id);
    }

    render() {
        let list = <div className="no-content-message">There is no channels to show</div>;
        if (this.props.channels && this.props.channels.length) {
            list = this.props.channels.map(c => <Channel key={c.id +1} id={c.id} name={c.name} participants={c.participants} onClick={() => this.handleClick(c.id)} />);
        }
        return (
            <div className='channel-list'>
                {list}
            </div>);
    }

}