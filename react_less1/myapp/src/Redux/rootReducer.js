import { combineReducers } from "redux";
import footerReducer from "./reducers/getFooterItems.reducer";
import headerReducer from "./reducers/getHeaderItems.reducer";
import contentReducer from "./reducers/getContentItems.reducer";
import userLoginReducer from "./reducers/userLogin.reducer";
import getPartnersReducer from "./reducers/getPartners.reducer";
import getContactsReducer from "./reducers/getContacts.reducer";

const rootReducer = combineReducers({
  footerItems: footerReducer,
  headerItems: headerReducer,
  contentItems: contentReducer,
  userLogin: userLoginReducer,
  partners: getPartnersReducer,
  contacts: getContactsReducer,
});

export default rootReducer;
