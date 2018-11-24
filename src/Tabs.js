import React from 'react';
import classNames from 'classnames';
import diamonddogs from './data/diamonddogs';
import './Tabs.css';
import './Bio.css';

const KEYS = {
  right: 39,
  left: 37,
  down: 40,
};

const findNext = (tabIds, selectedId) => {
  const index = tabIds.findIndex(id => id === selectedId);
  if (index === -1) {
    return selectedId;
  }

  if (index === tabIds.length - 1) {
    return tabIds[0];
  }

  return tabIds[index + 1];
};

const findPrevious = (tabIds, selectedId) => {
  const index = tabIds.findIndex(id => id === selectedId);
  if (index === -1) {
    return selectedId;
  }

  if (index === 0) {
    return tabIds[tabIds.length - 1];
  }

  return tabIds[index - 1];
};

class TabManager extends React.Component {
  handleSetSelected = id => this.setState({ selected: id });
  handleKeyDown = event => {
    switch (event.which) {
      case KEYS.right: {
        this.setState(
          {
            selected: findNext(this.props.tabIds, this.state.selected),
          },
          () => {
            this.state.selectedTabRef.current.focus();
          },
        );
        break;
      }
      case KEYS.left: {
        this.setState(
          {
            selected: findPrevious(this.props.tabIds, this.state.selected),
          },
          () => {
            this.state.selectedTabRef.current.focus();
          },
        );
        break;
      }
      case KEYS.down: {
        this.state.panelRef.current.focus();
        break;
      }
      default: {
        break;
      }
    }
  };

  state = {
    selected: this.props.tabIds ? this.props.tabIds[0] : null,
    setSelected: this.handleSetSelected,
    handleTabKeyDown: this.handleKeyDown,
    panelRef: React.createRef(),
    selectedTabRef: React.createRef(),
  };

  render() {
    return this.props.children(this.state);
  }
}

export default class Tabs extends React.PureComponent {
  render() {
    return (
      <TabManager tabIds={diamonddogs.map(member => member.id)}>
        {tabState => {
          const selectedMember = diamonddogs.find(
            member => member.id === tabState.selected,
          );
          return (
            <>
              <div className="page-title">Diamond Dogs</div>
              <div className="tablist">
                {diamonddogs.map(member => (
                  <button
                    key={member.id}
                    tabIndex={tabState.selected !== member.id ? -1 : undefined}
                    ref={
                      tabState.selected === member.id && tabState.selectedTabRef
                    }
                    onKeyDown={tabState.handleTabKeyDown}
                    onClick={() => {
                      tabState.setSelected(member.id);
                    }}
                    className={classNames([
                      'tab',
                      {
                        'tab--selected': tabState.selected === member.id,
                      },
                    ])}
                  >
                    {member.name}
                  </button>
                ))}
              </div>
              {selectedMember && (
                <section ref={tabState.panelRef} tabIndex={0}>
                  <img
                    className="bio-photo"
                    src={selectedMember.photo}
                    alt=""
                  />
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
        }}
      </TabManager>
    );
  }
}
