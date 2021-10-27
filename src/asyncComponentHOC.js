import { Component, useEffect, useState } from 'react';

export const _asyncComponent = ({ loader, loading: Loading }) => {
  return class AsyncComponent extends Component {
    state = {
      component: null,
    };

    async componentDidMount() {
      const { default: component } = await loader();

      setTimeout(() => this.setState({ component }), 2000); // component === Example!
    }

    render() {
      const { component: LoadedComponent } = this.state;
      console.log(this.state.component);

      return LoadedComponent ? (
        <LoadedComponent {...this.props} />
      ) : (
        <Loading />
      );
    }
  };
};

// TODO investigate

export const asyncComponent = ({ loader, loading: Loading }) => {
  const MyComponent = (props) => {
    const [ui, setUi] = useState(null);

    useEffect(() => {
      const loadComponent = async () => {
        const { default: LoadedComponent } = await loader();

        setTimeout(() => setUi(<LoadedComponent {...props} />), 2000);
      };

      loadComponent();
    }, [props]);

    return ui || <Loading />;
  };

  return MyComponent;
};
