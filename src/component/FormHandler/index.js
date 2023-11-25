import {forwardRef, useImperativeHandle, useRef} from 'react';
import * as yup from 'yup';

import {SCHEMAS} from './Constants';

const Form = forwardRef((props, ref) => {
  const childRefsHashMap = useRef(new Map());

  const schema = useRef(yup.object({}));

  useImperativeHandle(ref, () => ({
    onSubmitForm,
    focusByRefCollectorKey,
    getInputRef,
    deleteRef,
    onSubmitEditing,
  }));

  const deleteRef = refToDelete => childRefsHashMap.current.delete(refToDelete);

  // collecting user entered values from all inputs
  const getValues = () => {
    let data = {};

    for (let key of childRefsHashMap.current.keys()) {
      data[key] = childRefsHashMap.current.get(key)?.getValue();
    }
    return data;
  };

  const onSubmitForm = () => validate(schema.current, getValues());

  const validate = (schema, data) => {
    try {
      const result = schema.validateSync(data, {
        abortEarly: false,
        strict: true,
      });

      Object.keys(result).map(key =>
        childRefsHashMap.current.get(key).setError(false, ''),
      );
      return result;
    } catch (err) {
      Object.keys(transformYupErrorsIntoObject(err)).map(key => {
        childRefsHashMap.current
          .get(key)
          .setError(true, transformYupErrorsIntoObject(err)[key]);
      });
    }
    return null;
  };

  /**
   * TransformYupErrorsIntoObject
   *
   * @description Transform the useless yup error into a useable validation object
   * @param {ValidationError} errors Yup validation errors
   * @returns {Record<string, string>} Validation errors
   */
  const transformYupErrorsIntoObject = (
    errors: ValidationError,
  ): Record<string, string> => {
    const validationErrors: Record<string, string> = {};

    errors.inner.forEach((error: any) => {
      if (error.path !== undefined) {
        validationErrors[error.path] = error.errors[0];
      }
    });

    return validationErrors;
  };

  const refCollector = (key, inputSchema) => ref => {
    if (inputSchema) {
      schema.current = schema.current.concat(inputSchema);
    }

    childRefsHashMap.current.set(key, ref);
  };

  const focusByRefCollectorKey = key =>
    childRefsHashMap.current.get(key) &&
    childRefsHashMap.current.get(key).focus &&
    childRefsHashMap.current.get(key).focus();

  const getInputRefs = key => childRefsHashMap.current;
  const getInputRef = key => childRefsHashMap.current.get(key);
  const pipe =
    (...fns) =>
    x =>
      fns.reduce((v, f) => f(v), x);

  const compose =
    (...fns) =>
    x =>
      fns.reduceRight((v, f) => f(v), x);

  // handling onSubmit of each input when user moves to next input from keyboard
  const onSubmitEditing = key => () => pipe(findIndex, focusNextInput)(key);

  // keys in a hasmap remains in same order as they were added so finding index of input triggered on submit
  // so to focus on next one
  const findIndex = key => keys().findIndex(filter(key));

  // if found index is less then array length then there are more inputs to focus on
  const focusNextInput = idx =>
    idx !== -1 &&
    idx < keys().length - 1 &&
    childRefsHashMap.current.get(keys()[idx + 1])?.focus();

  const keys = () => Array.from(childRefsHashMap.current.keys());

  const filter = key => item => item == key;

  return props.children(SCHEMAS(refCollector, onSubmitEditing, validate));
});

export default Form;
