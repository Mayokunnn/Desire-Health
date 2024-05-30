import PropTypes from "prop-types";
import { AppLayout } from "../components/AppLayout/AppLayout";
import { useAuthorize } from "../hooks/useAuthorize";

MainApp.propTypes = {
  user: PropTypes.object,
};

export function MainApp({ user }) {
  useAuthorize()
  return <AppLayout user={user} />;
}
