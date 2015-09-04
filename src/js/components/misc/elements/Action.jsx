import React from 'react/addons';


export default class Action extends React.Component {
    render() {
        const action = this.props.action;
        const startDate = Date.utc.create(action.start_time);
        const timeLabel = startDate.setUTC(true)
            .format('{yyyy}-{MM}-{dd}, {HH}:{mm}');

        return (
            <span className="action">
                <span className="date">{ timeLabel }</span>
                <span className="activity">{ action.activity.title }</span>
                <span className="location">{ action.location.title }</span>
            </span>
        );
    }
}

Action.propTypes = {
    action: React.PropTypes.object.isRequired
};
