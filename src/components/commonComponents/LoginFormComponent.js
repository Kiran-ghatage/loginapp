import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
});

function LoginFormComponent(props) {
	const { classes } = props;

	const login = event => {
		event.preventDefault();
		props.authCheck();
	}
	return (
		<main className={classes.main}>
			<CssBaseline />
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Login
        </Typography>
				<form className={classes.form}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">User Name</InputLabel>
						<Input
							id="email"
							name="userName"
							autoComplete="email"
							onChange={props.handleChange("userName")}
							autoFocus />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password">Password</InputLabel>
						<Input
							name="password"
							type="password"
							id="password"
							autoComplete="current-password"
							onChange={props.handleChange("password")}
						/>
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={login}
					>
						Login
          </Button>
				</form>
			</Paper>
		</main>
	);
}

LoginFormComponent.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginFormComponent);