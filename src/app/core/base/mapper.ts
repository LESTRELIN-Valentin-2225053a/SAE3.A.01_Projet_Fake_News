/**
 * Abstract class representing a mapper for converting between input and output types.
 * @typeparam I The input type.
 * @typeparam O The output type.
 */
export abstract class Mapper<I, O> {

  /**
   * Maps from an input type to an output type.
   * @param param The input parameter to map from.
   * @returns The output mapped result.
   */
  abstract mapFrom(param: I): O;

  /**
   * Maps from an output type to an input type.
   * @param param The output parameter to map from.
   * @returns The input mapped result.
   */
  abstract mapTo(param: O): I;

  /**
   * Maps from an array of input types to an array of output types.
   * @param param The array of input parameters to map from.
   * @returns An array of output mapped results.
   */
  abstract mapFromList(param: I[]): O[];

  /**
   * Maps from an array of output types to an array of input types.
   * @param param The array of output parameters to map from.
   * @returns An array of input mapped results.
   */
  abstract mapToList(param: O[]): I[];
}
