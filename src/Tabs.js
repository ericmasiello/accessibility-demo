import React from 'react';
import classNames from 'classnames';
import diamonddogs from './data/diamonddogs';
import './Tabs.css';
import './Bio.css';

export default class Tabs extends React.PureComponent {
  state = {
    selected: diamonddogs.map(member => member.id)[0],
  };
  setSelected = id => {
    this.setState({ selected: id });
  };
  render() {
    const selectedMember = diamonddogs.find(
      member => member.id === this.state.selected,
    );
    return (
      <>
        <div className="page-title">Diamond Dogs</div>
        <div className="tablist">
          {diamonddogs.map(member => (
            <button
              key={member.id}
              onClick={() => {
                this.setSelected(member.id);
              }}
              className={classNames([
                'tab',
                {
                  'tab--selected': this.state.selected === member.id,
                },
              ])}
            >
              {member.name}
            </button>
          ))}
        </div>
        {selectedMember && (
          <section>
            <img className="bio-photo" src={selectedMember.photo} alt="" />
            <div className="bio">
              <div className="bio__label">Hometown</div>
              <div className="bio__item">{selectedMember.hometown}</div>
              <div className="bio__label">Time at Vistaprint</div>
              <div className="bio__item">{selectedMember.employment}</div>
              <div className="bio__item">{selectedMember.bio}</div>
            </div>
          </section>
        )}
      </>
    );
  }
}
