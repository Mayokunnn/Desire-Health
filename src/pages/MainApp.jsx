import PropTypes from "prop-types";
import { AppLayout } from "../components/AppLayout/AppLayout";

MainApp.propTypes = {
  user: PropTypes.object,
};

export function MainApp({ user }) {
  console.log(user);
  return <AppLayout user={user} />;
}
