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
              <td>arte components</td>
              <td>-</td>
              <td>
              <Link to="/artecomponents">
                /artecomponents
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
            <tr>
              <td>-</td>
              <td>Registration</td>
              <td>
              <Link to="/main/artworks/regist">
                /main/artworks/regist
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Progress</td>
              <td>
              <Link to="/main/artworks/process01">
                /main/artworks/process01
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>
              <Link to="/main/artworks/process02">
                /main/artworks/process02
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>
              <Link to="/main/artworks/process03">
                /main/artworks/process03
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>
              <Link to="/main/artworks/process04">
                /main/artworks/process04
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>
              <Link to="/main/artworks/process05">
                /main/artworks/process05
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>
              <Link to="/main/artworks/process06">
                /main/artworks/process06
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>
              <Link to="/main/artworks/process07">
                /main/artworks/process07
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
            {/* Activity  */}
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
              <td>Activity_List_01 _noresult</td>
              <td>
              <Link to="/activity/noresult">
                /activity/noresult
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
            {/* wallet  */}
            <tr>
              <td>Wallet</td>
              <td>wallet</td>
              <td>
              <Link to="/wallet">
                /wallet
              </Link>
              </td>
            </tr>
            {/* service  */}
            <tr>
              <td>-</td>
              <td>wallet</td>
              <td>
              <Link to="/service/policy">
                /service/policy
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>wallet</td>
              <td>
              <Link to="/service/terms">
                /service/terms
              </Link>
              </td>
            </tr>
            <tr>
              <td>Curation</td>
              <td>Curation List_1</td>
              <td>
              <Link to="/curation">
                /curation
              </Link>
              </td>
            </tr>
            <tr>
              <td>Curation</td>
              <td>Curation List_1_noresult</td>
              <td>
              <Link to="/curation/noresult">
                /curation/noresult
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Curation_1</td>
              <td>
              <Link to="/curation/view">
                /curation/view
              </Link>
              </td>
            </tr>
            <tr>
              <td>-</td>
              <td>Curation_2</td>
              <td>
              <Link to="/curation/end">
                /curation/end
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
