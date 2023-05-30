import { cleanup } from "@testing-library/react";
import title, {defaultState} from "../../redux/pages/app/reducers";
import { changeTitle } from "../../redux/pages/app/actions";

afterEach(cleanup);

it('should handle TITLE_PAGE', () => {
    expect(title(defaultState, changeTitle("Test"))).toEqual({"text": "Test"});
});
