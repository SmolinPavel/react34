import {
  Component,
  // useEffect,
  //  useState
} from 'react';

export const asyncComponent = ({ loader, loading: Loading }) => {
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

      return LoadedComponent ? (
        <LoadedComponent {...this.props} />
      ) : (
        <Loading />
      );
    }
  };
};

// TODO investigate

// export const asyncComponent = ({ loader, loading: Loading }) => {
//   return (props) => {
//     const [component, setComponent] = useState(null);

//     useEffect(() => {
//       const loadComponent = async () => {
//         const { default: component } = await loader();

//         setTimeout(() => setComponent(component), 1000);
//       };

//       loadComponent();
//     }, []);

//     return component ? component : <Loading />;
//   };
// };
