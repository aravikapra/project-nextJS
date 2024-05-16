import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'next/link';

function Breadcrumbs({ paths }) {
  return (
    <Breadcrumb>
      {paths ? (
        paths.map((path, index) => (
            <Breadcrumb.Item key={index} linkAs={Link} linkProps={{ to: path.link }}>
              {path.label}
            </Breadcrumb.Item>
          ))
      ) : null }
    </Breadcrumb>
  );
}

export default Breadcrumbs;
