import { Link } from 'react-router-dom';

function Path() {
  return (
    <div>
      <div className="pathGuide">
        <table className="pathtable">
          <thead>
            <tr>
              <th>depth1</th>
              <th>depth2</th>
              <th>path</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>component guide</td>
              <td>-</td>
              <td>
              <Link to="/guide">
                /guide
              </Link>
              </td>
            </tr>
            <tr>
              <td>Main</td>
              <td>Main</td>
              <td>
              <Link to="/main">
                /main
              </Link>
              </td>
            </tr>
            {/*  */}
            <tr>
              <td>Artist</td>
              <td>Artist</td>
              <td>
              <Link to="/artist">
                /artist
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Artist List</td>
              <td>
              <Link to="/artist/list">
                /artist/list
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Artist Registration</td>
              <td>
              <Link to="/artist/regist">
                /artist/regist
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Artist View</td>
              <td>
              <Link to="/artist/view">
                /artist/view
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Artist Modify</td>
              <td>
              <Link to="/artist/modify">
                /artist/modify
              </Link>
              </td>
            </tr>
            {/*  */}
            <tr>
              <td>Gallery</td>
              <td>Gallery</td>
              <td>
              <Link to="/gallery">
                /gallery
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Gallery Start</td>
              <td>
              <Link to="/gallery/start">
                /gallery/start
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Gallery Registration</td>
              <td>
              <Link to="/gallery/regist">
                /gallery/regist
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Gallery Confirm</td>
              <td>
              <Link to="/gallery/confirm">
                /gallery/confirm
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Gallery Sorry</td>
              <td>
              <Link to="/gallery/sorry">
                /gallery/sorry
              </Link>
              </td>
            </tr>
            {/*  */}
            <tr>
              <td>Activity</td>
              <td>Activity_List_01</td>
              <td>
              <Link to="/activity">
                /activity
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Activity_List Price_01</td>
              <td>
              <Link to="/activity/list">
                /activity/list
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Activity_List Price_02</td>
              <td>
              <Link to="/activity/price">
                /activity/price
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Activity_Action_01</td>
              <td>
              <Link to="/activity/auction">
                /activity/auction
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Activity_Action_02</td>
              <td>
              <Link to="/activity/auction/soldout">
                /activity/auction/soldout
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Activity_Action_03</td>
              <td>
              <Link to="/activity/auction/remove">
                /activity/auction/remove
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Activity_Action_04</td>
              <td>
              <Link to="/activity/auction/status">
                /activity/auction/status
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Activity Status Component</td>
              <td>
              <Link to="/activity/guide">
                /activity/guide
              </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Path;
