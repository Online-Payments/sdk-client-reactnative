/*
 * Do not remove or alter the notices in this preamble.
 *
 * This software is owned by Worldline and may not be be altered, copied, reproduced, republished, uploaded, posted, transmitted or distributed in any way, without the prior written consent of Worldline.
 *
 * Copyright © 2024 Worldline and/or its affiliates.
 *
 * All rights reserved. License grant and user rights and obligations according to the applicable license agreement.
 *
 * Please contact Worldline for questions regarding license and user rights.
 */

import type { ValidationRule } from './ValidationRule';
import { PaymentProductField } from '../../api/models/payment-product/payment-product-field/PaymentProductField'; // eslint-disable-line @typescript-eslint/no-unused-vars

/**
 * Contains error message information for a specific {@link PaymentProductField}.
 */
export interface ValidationErrorMessage {
  readonly errorMessage: string;
  readonly paymentProductFieldId: string;
  readonly rule?: ValidationRule;
}
