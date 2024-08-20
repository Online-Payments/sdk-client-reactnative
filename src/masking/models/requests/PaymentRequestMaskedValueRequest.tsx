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

import { PaymentRequest } from '../../../api/models/payment-request/PaymentRequest';

/**
 * Request used to retrieve the masked / unmasked value of a field in a {@link PaymentRequest}.
 */
export interface PaymentRequestMaskedValueRequest {
  request: PaymentRequest;
  fieldId: string;
}
