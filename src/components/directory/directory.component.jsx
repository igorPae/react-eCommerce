import React from "react";
import MenuItem from '../../components/menu-item/menu-item.component';
import '../../components/directory/directory.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

const Directory = ({sections}) => (

            <div className='directory-menu'>
                {
                    sections.map(({id, ...otherProps}) => (
                        <MenuItem  key={id} {...otherProps} />
                    ))
                }
            </div>
)     
   
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);