import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {
    const mainClassName='heaven'
    const childrenWithWrapper = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: mainClassName
      })
    })
    return (
      <ThemedDecorations theme="heaven">
        {childrenWithWrapper}
      </ThemedDecorations>
    )
  }
}
