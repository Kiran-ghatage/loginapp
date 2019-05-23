import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import lodash from 'lodash';

const CustomTableCell = withStyles(theme => ({
	head: {
		backgroundColor: '#252f63',
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
});

const getTitleItems = (props) => {
	let headerItemsView = [];
	lodash.map(props.tableHeader, (item, index) => {
		headerItemsView.push(
			<TableCell component="th" scope="row"
				id={`SG_ID_HEADER_ITEM_${index}`}
				key={index}
				style={(props.tabelHeaderStyle) ? props.tabelHeaderStyle : { fontSize: '14px' }}
			>{`${item}`}
			</TableCell>
		)
	})
	return headerItemsView;
}
function createData(rowColumn) {
	return { rowColumn };
}

function CustomizedTable(props) {
	const { classes } = props;
	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						{getTitleItems(props)}
					</TableRow>
				</TableHead>
				<TableBody>
					{/* {getTableDataItems(props)} */}
					{props.values.map(user => (
						<TableRow className={classes.row} key={user.id}>
							<CustomTableCell component="th" scope="row">
								{user.id}
							</CustomTableCell>
							<CustomTableCell>{user.name}</CustomTableCell>
							<CustomTableCell>{user.age}</CustomTableCell>
							<CustomTableCell>{user.gender}</CustomTableCell>
							<CustomTableCell>{user.email}</CustomTableCell>
							<CustomTableCell>{user.phoneNo}</CustomTableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
}

CustomizedTable.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);