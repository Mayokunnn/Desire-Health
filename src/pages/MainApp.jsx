import PropTypes from "prop-types";
import { AppLayout } from "../components/AppLayout/AppLayout";

MainApp.propTypes = {
  user: PropTypes.object,
};

export function MainApp({ user }) {
  return <AppLayout />;
}
