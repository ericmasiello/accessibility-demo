import React from 'react';
import classNames from 'classnames';
import diamonddogs from './data/diamonddogs';
import './Tabs.css';

class TabManager extends React.Component {
  handleSetSelected = id => this.setState({ selected: id });
  handleKeyDown = event => {
    debugger;
  };
  state = {
    selected: this.props.selected,
    setSelected: this.handleSetSelected,
    tabProps: {
      role: 'tab',
      onKeyDown: this.handleKeyDown,
      tabIndex: -1,
    },
    selectedTabProps: {
      role: 'tab',
      onKeyDown: this.handleKeyDown,
      'aria-selected': 'true',
    },
    panelProps: {
      role: 'tabpanel',
      hidden: true,
    },
    selectedPanelProps: {
      tabIndex: 0,
      role: 'tabpanel',
    },
  };

  render() {
    return this.props.children(this.state);
  }
}

export default class Tabs extends React.Component {
  render() {
    return (
      <TabManager selected={diamonddogs[0].id}>
        {tabState => (
          <>
            <div role="tablist" className="tablist">
              {diamonddogs.map(member => {
                const tabProps =
                  tabState.selected === member.id
                    ? tabState.selectedTabProps
                    : tabState.tabProps;

                return (
                  <a
                    key={member.id}
                    {...tabProps}
                    className={classNames([
                      'tab',
                      {
                        'tab--selected': tabState.selected === member.id,
                      },
                    ])}
                    href={`#${member.id}_panel`}
                    id={`#${member.id}_tab`}
                    onClick={event => {
                      event.preventDefault();
                      tabState.setSelected(member.id);
                    }}
                  >
                    {member.name}
                  </a>
                );
              })}
            </div>
            {diamonddogs.map(member => {
              const panelProps =
                tabState.selected === member.id
                  ? tabState.selectedPanelProps
                  : tabState.panelProps;

              return (
                <section
                  key={member.id}
                  {...panelProps}
                  id={`#${member.id}_panel`}
                  aria-labelledby={`#${member.id}_tab`}
                >
                  <img src={member.photo} />
                  {member.bio}
                </section>
              );
            })}
          </>
        )}
      </TabManager>
    );
  }
}
