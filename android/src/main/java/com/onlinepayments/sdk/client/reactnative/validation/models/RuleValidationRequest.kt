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

package com.onlinepayments.sdk.client.reactnative.validation.models

import com.onlinepayments.sdk.client.android.model.validation.AbstractValidationRule
import com.onlinepayments.sdk.client.android.model.validation.ValidationErrorMessage
 
data class RuleValidationRequest(
    val value: String,
    val rule: AbstractValidationRule
) : ValidationRequest {
    override fun validate(): List<ValidationErrorMessage> {
        return if (rule.validate(value))
            emptyList() 
        else
            listOf(ValidationErrorMessage(rule.messageId, "Validation without productFieldId", rule))
    }
}
