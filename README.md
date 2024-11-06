# `react-hook-executer`

> <font color=yellow> Allows a programmer to easily register custom hooks dynamically in React.js.</font>

**Note:**  Manage React hooks dynamically, enabling setting, retrieving, and executing hooks outside of a traditional React component structure.

## Authors

- Shivaji Surwase

- Shyamal Surwase

## Purpose

The primary purpose of HooksExecuter is to provide a centralized way to:

    1.Register hooks with setHook and associate them by name.
    2.Execute hooks via a component (ReactHooksWrapper) and store their results.
    3.Retrieve results of these hooks on demand using getHook.

## Usage

```js
// Setting hooks
setHook('session', useAuthentication).setHook('alert', useAlert);

// Retrieving a hook result
getHook('session').sessionExpire();
```